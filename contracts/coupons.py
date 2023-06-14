import smartpy as sp

FA2 = sp.io.import_script_from_url("https://legacy.smartpy.io/templates/fa2_lib.py")


class CouponsNFT(
    FA2.Admin,
    FA2.ChangeMetadata,
    FA2.WithdrawMutez,
    FA2.BurnNft,
    FA2.OnchainviewBalanceOf,
    FA2.OffchainviewTokenMetadata,
    FA2.Fa2Nft,
):
    def __init__(
        self,
        total_supply,
        merchant,
        expiration_date,
        coupon_code,
        coupon_id,
        description,
        admin,
        metadata,
        token_metadata={},
        ledger={},
        policy=None,
        metadata_base=None,
    ):
        FA2.Fa2Nft.__init__(
            self,
            metadata,
            token_metadata=token_metadata,
            ledger=ledger,
            policy=policy,
            metadata_base=metadata_base,
        )
        FA2.Admin.__init__(self, admin)
        self.update_initial_storage(
            total_supply=total_supply,
            merchant=merchant,
            expiration_date=sp.pack(expiration_date),
            coupon_code=coupon_code,
            coupon_id=coupon_id,
            description=description,
            image_url=metadata,
            claimants=sp.map(l={}, tkey=sp.TAddress, tvalue=sp.TNat),
        )

    @sp.entry_point
    def mint(self, owner):
        sp.verify(self.data.total_supply > 0, "NO COUPONS REMAINING")
        sp.verify(self.data.claimants.get(owner, 0) == 0, "COUPON ALREADY CLAIMED")

        token_id = self.data.last_token_id
        self.data.ledger[token_id] = owner
        self.data.token_metadata[token_id] = sp.record(
            token_id=token_id,
            token_info=sp.map(
                {
                    "name": sp.utils.bytes_of_string("Coupon"),
                    "rights": sp.utils.bytes_of_string(
                        "No License / All Rights Reserved"
                    ),
                    "symbol": sp.utils.bytes_of_string("CPN"),
                    "decimals": sp.utils.bytes_of_string("%d" % 0),
                    "displayUri": sp.utils.bytes_of_string(
                        "ipfs://QmYQUQjKXLgXzmX1ZEy6TpHG9xSUffiJHWEGSyRkDEBYNC"
                    ),
                    "artifactUri": sp.utils.bytes_of_string(
                        "ipfs://QmYQUQjKXLgXzmX1ZEy6TpHG9xSUffiJHWEGSyRkDEBYNC"
                    ),
                    "thumbnailUri": sp.utils.bytes_of_string(
                        "ipfs://QmYQUQjKXLgXzmX1ZEy6TpHG9xSUffiJHWEGSyRkDEBYNC"
                    ),
                    "image": sp.utils.bytes_of_string(
                        "ipfs://QmYQUQjKXLgXzmX1ZEy6TpHG9xSUffiJHWEGSyRkDEBYNC"
                    ),
                    "description": self.data.description,
                    "coupon_code": self.data.coupon_code,
                    "merchant": self.data.merchant,
                    "description": self.data.description,
                    "expiration_date": self.data.expiration_date,
                }
            ),
        )
        self.data.last_token_id += 1
        self.data.total_supply -= 1
        self.data.claimants[owner] = token_id


class CouponsFactory(sp.Contract):
    def __init__(self, admin):
        self.init(
            admin=admin,
            couponsNFTContracts=sp.big_map(tkey=sp.TNat, tvalue=sp.TAddress),
        )

    @sp.entry_point
    def create_couponNFT_contract(
        self,
        total_supply,
        merchant,
        expiration_date,
        coupon_code,
        coupon_id,
        description,
        metadata,
    ):
        sp.verify(sp.sender == self.data.admin, "NOT ADMIN")

        couponsNFTContract = CouponsNFT(
            total_supply=total_supply,
            merchant=merchant,
            expiration_date=expiration_date,
            coupon_code=coupon_code,
            coupon_id=coupon_id,
            description=description,
            admin=self.data.admin,
            metadata=metadata,
        )

        deployedContract = sp.create_contract(contract=couponsNFTContract)

        self.data.couponsNFTContracts[coupon_code] = deployedContract


@sp.add_test(name="test nft")
def test():
    sc = sp.test_scenario()
    alice = sp.test_account("alice")
    bob = sp.test_account("bob")
    admin = sp.address("tz1WUKjXiGKguuYAvB1NnmGdYt89sSdi9gzv")
    sc.show(sp.record(alice=alice.address, bob=bob.address))

    couponsFactory = CouponsFactory(admin)

    sc.h1("Deploying CouponsFactory")

    sc += couponsFactory

    couponsFactory.create_couponNFT_contract(
        total_supply=2,
        merchant=sp.utils.bytes_of_string("Amazon"),
        expiration_date=sp.timestamp(1234567890),
        coupon_code=sp.utils.bytes_of_string("AMAZON10"),
        coupon_id=1,
        description=sp.utils.bytes_of_string("10% OFF FOR AMAZON"),
        metadata=sp.utils.metadata_of_url("http://www.example.com"),
    ).run(sender=admin)
    couponsFactory.create_couponNFT_contract(
        total_supply=10,
        merchant=sp.utils.bytes_of_string("Lazada"),
        expiration_date=sp.timestamp(1235556680),
        coupon_code=sp.utils.bytes_of_string("LAZADA20"),
        coupon_id=1,
        description=sp.utils.bytes_of_string("20% Off LAZADA"),
        metadata=sp.utils.metadata_of_url("http://www.example.com"),
    ).run(sender=admin)
