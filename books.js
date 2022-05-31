function Book({data}){
    return (

        <div className="card">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
            <h5>{data.subtitle}</h5>

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-white font-weight-bold">Title:</td>
                        <td className="text-white">{data.title}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Subtitle:</td>
                        <td className="text-white">{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Author:</td>
                        <td className="text-white">{data.author}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Publisher:</td>
                        <td className="text-white">{data.publisher}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Description:</td>
                        <td className="text-white">{data.description}</td>
                    </tr>
                  </tbody>
                </table>

            </div>
        </div>

)};

function Picture({data}){
    //console.log(`${data.picture}`);
    const pic=data.picture;
    console.log(`pic = ${pic}`);
    return (

        <div className="card">
            <img src={pic} height="400"></img>
        </div>

)};