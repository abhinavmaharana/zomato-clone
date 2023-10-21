import { COLLECTIONS } from '../../../utils/constants';

const Collections = () => {
  // console.log(COLLECTIONS);
  return (
    <div className="space-y-8 mt-32">
      <div className="space-y-3">
        <h1 className="text-3xl">Collections</h1>
        <div className="flex justify-evenly space-x-80 -ml-6">
          <p className="text-lg font-thin">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
          <p className="text-lg font-thin text-secondary">
            All collections in Delhi NCR <i className="fa fa-arrow-right" />
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-4 gap-3">
        {COLLECTIONS?.map(list => {
          return (
            <div key={list.id} className="">
              <div className="">
                <img
                  className="w-[400px] h-[220px] rounded-xl"
                  src={list.image}
                  alt={list.title}
                />
                <div className="absolute -mt-24 text-primary p-4">
                  <p className="text-xl">{list.title}</p>
                  <p className="text-xl">
                    {list.places} <i className="fa fa-arrow-right" />{' '}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
