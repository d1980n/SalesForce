import './Activity.css';
import Hieders from '../temp/Hieders.jsx'
function Activity() {

    return ( 
        <body className='Active'>
            <header className='head'>
                <Hieders/>
            </header>
            
            <div className = 'Activity'>
                <div className='activities'>
                    <h1>Activity Log</h1>
                    <div className='activitylog'>
                    <table className='table' border="1" width="100%" height="250px">
                        
                        <tr className='judulss'>
                            <th className='num'>No</th>
                            <th width="330px">Nama Barang</th>
                            <th width="330px">Nama Sales</th>
                            <th width="100px">Tanggal</th>
                            <th width="80px">Qty Terjual</th>
                            <th>Harga Terjual</th>
                        </tr>
                        <tr>
                        <td className='num'>1</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>16/04/1998</td>
                            <td>100</td>
                            <td>kungkingkang</td>
                        </tr>
                        <tr>
                        <td className='num'>2</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>10:30</td>
                            <td>20938</td>
                            <td>kungkingkang</td>
                        </tr>
                        <tr>
                        <td className='num'>3</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>10:30</td>
                            <td>12093</td>
                            <td>kungkingkang</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>

        </body>
    );
}

export default Activity;