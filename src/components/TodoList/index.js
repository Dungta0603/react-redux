import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector, searchTextselector } from "../redux/selectors";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setpriorty] = useState("Medium");
  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchTextselector);

  console.log(todoList, searchText);
  const dispatch = useDispatch();
  const handleAddButtononclick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        prioriry: prioriry,
      })
    );
    setTodoName("");
    setpriorty("Medium");
  };
  const handleInputChange = e => {
    setTodoName(e.target.value);
  };

  const handlePrioriryChange = value => {
    console.log(value);
    setpriorty(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map(todo => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handlePrioriryChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtononclick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
