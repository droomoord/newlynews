import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import Article from "./article/Article";
import styles from "../../styles/Articles.module.css";
// import FilterOptions from "../filter/filterOptions";
import LazyLoad from 'react-lazyload';


const Articles = ({ apiData }) => {
  const router = useRouter()
  const [ page, setPage ] = useState(1)
  const [ newArticles, setNewArticles ] = useState([])

  function changePage() {
    setPage(page + 1)
  }

  useEffect(() => {
    async function getPage() {
      try {
        const category = router.query.category ? router.query.category : "general";
        console.log(`loading page ${page}`);
        const { data } = await axios({
          url: `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}`,
          headers: {
            "X-Api-Key": process.env.apiKey,
          },
        });
        
        setNewArticles(newArticles.concat(data.articles))
      } catch (error) {
        console.log(error);
      }
    }
    page > 1 ? getPage() : null;
    
  }, [page])

  
  

  return (
    <div className={styles.container}>
      {/* <FilterOptions></FilterOptions> */}
        <div className={styles.flex}>
        {apiData.articles.map((article, index, array) => {
          return <LazyLoad height={200}  key={index} >
            <Article 
              
              article={article} 
              lastArticle={index === array.length - 2}
              changePage = {changePage}
              />

          </LazyLoad>
        })}
        {
          newArticles ? 
          newArticles.map((article, index, array) => {
            return <LazyLoad height={200}  key={index} >
              <Article 
                
                article={article} 
                lastArticle={index === array.length - 2}
                changePage = {changePage}
                />
  
            </LazyLoad>
          })
          : 
          null
        }
      </div>  
    </div>
  
  );
}

export default Articles;
