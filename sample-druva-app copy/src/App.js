import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './PostForm';
import AllPost from './AllPost';

import Heading from "orion/lib/heading";
import Form from "orion/lib/form";
import FormGroup from "orion/lib/formGroup";
import Input from "orion/lib/input";
import Label from "orion/lib/label";
import Button from 'orion/lib/button';

function App() {
  return (
    <div className="App">
        <PostForm />
        <AllPost />
    </div>
  );
}

export default App;
