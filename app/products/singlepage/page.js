import Ratings from "./ratings";
import Feedback from "./feedback";
import ReviewForm from "./reviewform";
import RecentView from "./recentlyview";
import BreadcrumbsLink from "./breadcrumb";
import AddToCart from "./addtocard";

const SinglePage = ({ singleData }) => {
  return (
    <>
      <div className="max-w-[1390px] mx-auto px-5  md:px-10">
        <BreadcrumbsLink />
        <AddToCart product={singleData} />
        <Ratings />
        {/* <Feedback />
        <ReviewForm /> */}
        <RecentView />
      </div>
    </>
  );
};

export default SinglePage;
