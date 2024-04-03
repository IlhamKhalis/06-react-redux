import { Provider, useDispatch, useSelector } from 'react-redux';
import { setLogin} from '../redux/auth/authSlice';
import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
import parse from 'html-react-parser'; // import parse utk parsing string html ke html murni
import { store } from '@/redux/store/store';

function LoginCheck() {
    const { isLogin } = useSelector((state:any) => state.auth);
    const dispatch = useDispatch();

  function handleAuth(type = 'logout') {
    if (type === 'logout' || type === 'login') {
      dispatch(setLogin({ isLogin: type === 'login' ? true : false }));
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-3">
            <div className="card-header">Status Login</div>
            <div className="card-body">
              {isLogin ? (
                <div>You are logged in!</div>
              ) : (
                parse('<div class="alert alert-success">Yay, berhasil login!!!</div>')
              )}
              <button
                className="btn btn-md btn-danger"
                onClick={() => handleAuth('logout')}
              >
                Log out
              </button>
              {!isLogin ? (
                parse('<div class="alert alert-dark">Anda telah logout!</div>')
              ) : (
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => handleAuth('login')}
                >
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App(){
    return(
    <Provider store={store}>
    <LoginCheck/>
    </Provider>
    )
}
export default App;