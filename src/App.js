import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./Components/Posts";
import { PostDetails} from "./Components/PostDetails";
import { Home} from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./Components/Layout/Layout";
import { SavedPosts } from "./Components/savedPosts";
import './App.css' ;

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout/>} > 
          <Route index element = {<Home/>} /> 
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="savedposts" element={<SavedPosts />} />
          <Route path="posts/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
