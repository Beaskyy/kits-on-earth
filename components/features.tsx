import Image from "next/image";

const Features = () => {
  return (
    <main className="p-4 lg:px-40 py-20">
      <h2 className="text-3xl lg:text-6xl font-bold mb-10 text-center mt-10">
        How it works
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h4 className="text-xl lg:text-3xl font-semibold">
            Exchange your waste
          </h4>
          <p className="max-w-md mt-4 text-xl lg:text-3xl font-light">
            Collect and sort your recyclable waste - plastic bottles, empty
            cans, unused books, and more.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 mt-12 lg:mt-0">
          <Image
            src="/images/recycle.jpg"
            alt="exchange"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="flex items-center justify-center gap-10 order-last lg:order-first mt-12 lg:mt-0">
          <Image
            src="/images/recycle.avif"
            alt="reward"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
        <div className="">
          <h4 className="text-xl lg:text-3xl font-semibold">Get rewarded</h4>
          <p className="max-w-md mt-4 text-xl lg:text-3xl font-light">
            Use our app to find nearby drop-off locations or schedule a pick-up.
            Earn points for every item you contribute.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div>
          <h4 className="text-xl lg:text-3xl font-semibold">
            Redeem your rewards
          </h4>
          <p className="max-w-md mt-4 text-xl lg:text-3xl font-light">
            Choose from a variety of rewards, including:
          </p>
          <ul className="pl-8 text-2xl mt-8 text-gray-600 font-light">
            <li className="list-disc">
              <span className="font-medium">Food vouchers:</span> Enjoy delicious
              meals from our partner restaurants.
            </li>
            <li className="list-disc">
              <span className="font-medium">Filling station:</span> Redeem your
              rewards for fuel at participating stations.
            </li>
            <li className="list-disc">
              <span className="font-medium">Medical assistance:</span> Access
              basic healthcare services from participating hospitals and
              pharmacies.
            </li>
            <li className="list-disc">
              <span className="font-medium">Money:</span> Receive cash payouts for
              your contributions.
            </li>
            <li className="list-disc">
              <span className="font-medium">App vouchers:</span> Use points to
              purchase new products directly through the app.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-10 mt-12 lg:mt-0">
          <Image
            src="/images/reward.jpg"
            alt="exchange"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </main>
  );
};

export default Features;
