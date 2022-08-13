import { Link } from "react-router-dom";
import "../Main/Main.css";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import Header from "../Header/Header";

function Main({setQuestions}) {

  return (
    <>
    <Header/>
    <div className="container pt-3">
      <div className="test">
        <FormControl className="test__form">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Number of questions
          </InputLabel>
          <NativeSelect
            className="test__input"
            onChange={(e) => setQuestions(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
          </NativeSelect>
        </FormControl>
        <FormControl className="test__form">
          <InputLabel variant="standard" htmlFor="category">
            Select Category
          </InputLabel>
          <NativeSelect
            className="test__input"
          >
            <option value="Animals">Animals</option>
          </NativeSelect>
        </FormControl>
        <Link to="/Quiz">
          <Button className="test__btn" color="success" variant="contained">
            Start
          </Button>
        </Link>
      </div>
    </div>
    
    </>
  );
}

export default Main;
