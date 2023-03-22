import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function UncontrolledExample(props) {
  return (
    <Tabs
      defaultActiveKey="description"
      id="uncontrolled-tab-example" 
      className="mb-3"
     
    >
      <Tab eventKey="description" title="Description">
          <p>{props.des}</p>
         
      </Tab>
      <Tab eventKey="Overview" title="Overview">
      <p>Have no Overview</p>
      </Tab>
      <Tab eventKey="Review" title="Review">
         <p>Have  no Review</p>
      </Tab>
      
    </Tabs>
  );
}

export default UncontrolledExample;