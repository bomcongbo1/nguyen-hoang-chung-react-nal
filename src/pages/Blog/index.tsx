import React from 'react';
import ItemBlog from '../../components/ItemBlog';
import Pagging from '../../components/Pagging';
import SearchBar from '../../components/SearchBar';

const Blog = (props: any) => {   
    
    return(
        <div className="App">
        <SearchBar />  
          <p>
              Edit <code>src/Blog.tsx</code> and save to reload.
            </p>
        <ItemBlog/>
        <ItemBlog/>
        <ItemBlog/>
        <Pagging  {...props}/>

        </div>    
    ) 
}

export default Blog; 