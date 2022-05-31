function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <h1>React Components</h1>    
            {loaded && data.books.map((book,i) => (
                
                    <div className="row">
                        <div className="col-sm">
                        <Book data={book} key={i}/>
                        </div>
                        <div className="col-sm">
                        <Picture data={book} key={i}/>
                        </div>   
                    </div>
            ))};
        </div>     
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
