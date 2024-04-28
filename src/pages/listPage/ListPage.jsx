import './ListPage.scss'
import Filter from '../../components/Filter/filter'
import Card from '../../components/card/Card'
import { listData } from '../../lib/dummydata'
import Map from '../../components/map/Map';

function listPage() {

  const data = listData;

  return (
    <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data}/>
    </div>
  </div>

  )
}

export default listPage