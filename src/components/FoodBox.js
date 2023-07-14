import { Card, Col, Button, Row, Divider } from "antd"

function FoodBox({food, deleteFunc}){
    const handleDelete = () => {
        deleteFunc(food);

    }

    return ( 
        <Col span={6} >
            <Card>
                {/* {console.log(food)} */}
                <h3>{food.name}</h3>
                <Divider/>
                <p>calories: {food.calories}</p>
                <p>servings: {food.servings}</p>
                <img src={food.image} height={60} alt={food.name} />
                <Row>
                    <Button onClick={handleDelete}>Delete</Button>
                </Row>
            </Card>
        </Col> 
    )
}
export default FoodBox