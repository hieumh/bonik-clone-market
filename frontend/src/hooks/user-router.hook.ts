import {
  Location,
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

interface IUserRouterResult {
  location: Location;
  params: Readonly<Params<string>>;
  searchParams: URLSearchParams;
  navigate: NavigateFunction;
}

const useRouter = (): IUserRouterResult => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  return {
    location,
    params,
    searchParams,
    navigate,
  };
};

export default useRouter;
