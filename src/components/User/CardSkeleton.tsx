// Import necessary dependencies
import Skeleton from 'react-loading-skeleton';
/* c8 ignore start */
import 'react-loading-skeleton/dist/skeleton.css';
/* c8 ignore end */

/**
 * CardSkeleton component
 * This component is responsible for rendering the skeleton for a repository card
 * 
 * @returns CardSkeleton component
 * @param {void}
 * */
const CardSkeleton = () => {
  return ( 
    <li className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
    <a className="space-y-3">
      <div className="flex items-center gap-x-3">
        <div>
          <h3 className="text-base text-purple-600 font-semibold mt-1">
            <Skeleton width={200} />
          </h3>
        </div>
      </div>
      <p className="text-gray-600 sm:text-sm">
        <Skeleton count={3} />
      </p>
      <div className="text-sm text-gray-600 flex items-center gap-6">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <Skeleton width={50} />
        </span>
      </div>
    </a>
  </li> 
  );
}
 
export default CardSkeleton;