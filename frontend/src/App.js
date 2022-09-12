import { Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/posts/posts';
import PostView from './components/posts/post-view';
import NotFound from './components/not-found';
import CreatePostForm from './components/posts/create-post-form';
import EditPostForm from './components/posts/edit-post-form';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element={<Posts />} />
        <Route path='/posts/new' element={<CreatePostForm />} />
        <Route path='/posts/:id' element={<PostView />} />
        <Route path='/posts/:id/edit' element={<EditPostForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
