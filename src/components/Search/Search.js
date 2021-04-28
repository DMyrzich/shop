import { useHistory, useLocation } from 'react-router-dom';
import './Search.css';


const Search = () => {

    const { pathname, search } = useLocation();

    const getSerach = () => {

        if (search.includes('=')) {

            return decodeURI(search.split('=')[1]);

        }
        return '';
    }

    const { push } = useHistory();

    return (<div className="row" style={{ margin: 0 }}>
        <div className="input-field col s6" style={{ width: '99%', position: 'relative', right: '1rem' }}>
            <i className="material-icons prefix">search</i>
            <input onChange={(el) => {

                push({ pathname, search: el.target.value ? `?search=${el.target.value}` : null });
            }
            } value={getSerach()} required maxLength="15" />
            <i className="material-icons" style={{ position: 'absolute', top: '.5rem' }}>
                <span onClick={() => { }}
                    className="material-icons-large blue darken-1"
                    style={{ color: 'white', borderBlockColor: '#1e88e5', padding: 10, cursor: 'pointer', borderRadius: 15 }}>search</span>
            </i>
        </div>
    </div>)
}

export default Search;