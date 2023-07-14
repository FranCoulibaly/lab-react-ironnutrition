import { Card, Col, Button, Row,  Input } from "antd"
import { useState } from "react"


function AddFoodForm({ addFoodFunc }){
    const [formData, setFormData] = useState([{
        name: "",
        image: "",
        calories: "",
        servings: ""
    }]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addFoodFunc(formData);
        setFormData({
            name: "",
            image: "",
            calories: "",
            servings: ""
        });
      }
    
    return ( 
        <Col span={6}>
            <Card>
                <h2>Add New Food</h2>
                <Input type="text" value={formData.name} name="name" placeholder="Name" onChange={handleChange}/>
                <Input type="text" value={formData.image} name="image" placeholder="Image Url" onChange={handleChange}/>
                <Input type="number" value={formData.calories} name="calories" placeholder="Calories" onChange={handleChange}/>
                <Input type="number" value={formData.servings} name="servings" placeholder="Servings" onChange={handleChange}/>
                <Row>
                    <Button onClick={handleSubmit}>Add Food</Button>
                </Row>
            </Card>
        </Col> 
    )
}

export default AddFoodForm