import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">      
      <Card.Footer className="text-white p-2 fs-3 bg-dark">Address: Evergreen Terrace 742, Springfield</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;