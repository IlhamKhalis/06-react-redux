import { useDispatch, useSelector, Provider } from "react-redux";
import { tambahCounter, kurangCounter } from  '@/redux/counter/naikTurunSlice';
import { store } from "../redux/store/store";

function CounterNaikTurun() {
    const {totalCounter} = useSelector((state: any) => state.counter);

    const dispatch = useDispatch();

    function tombolTambah() {
        dispatch(tambahCounter());
    }

    function tombolKurang() {
        if (totalCounter > 0) {
            dispatch(kurangCounter());
        } else {
            alert('Minimal 0')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Counter Naik Turun</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 mt-2">Jumlah : </div>
                                <div className="col-2">
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" onClick={() => tombolKurang()}> - </button>
                                        <span className="form-control text-center">{totalCounter}</span>
                                        <button className="btn btn-outline-success" onClick={() => tombolTambah()}> + </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <Provider store={store}>
            <CounterNaikTurun />
        </Provider>
    );
}

export default App;