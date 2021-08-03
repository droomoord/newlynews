import React, {useState} from "react";

import { Card, Button } from "react-bootstrap";

// class Article extends React.Component{
//   state = {
//     hideImage: false
//   }
//   render() {
//     return <>
//     <Card style={{ maxWidth: "20rem" }}>
//       {this.state.hideImage ? 
//       null :  
//       <a href={this.props.article.url} target="_blank" rel="noreferrer">
//         <Card.Img 
//           variant="top" src={this.props.article.urlToImage} 
//           onError={() => this.setState({hideImage: true})} 
//           onLoad={this.props.lastArticle ? () => this.props.loadMoreArticles() : null}
//           />
//       </a>}
     
//       {this.props.article.author ? (
//         <Card.Header>
//           <small>Written by {this.props.article.author}</small>
//         </Card.Header>
//       ) : null}

//       <Card.Body>
//         <Card.Title>{this.props.article.title}</Card.Title>
//         <Card.Text>
//           {this.props.article.description}</Card.Text>

//         <Button
//           variant="primary"
//           href={this.props.article.url}
//           target="_blank"
//           rel="noreferrer"
//         >
//           Go to article
//         </Button>
//       </Card.Body>
//     </Card>
//   </>
//   }
// }



const Article = ({ article, lastArticle, changePage }) => {
  const [hideImage, setHideImage] = useState(false)
  return (
    <>
      <Card style={{ maxWidth: "20rem" }}>
        {hideImage ? 
        null :  
        <a href={article.url} target="_blank" rel="noreferrer">
          <Card.Img 
            variant="top" src={article.urlToImage} 
            onError={() => setHideImage(true)} 
            onLoad={lastArticle ? () => changePage() : null}
            />
        </a>}
       
        {article.author ? (
          <Card.Header>
            <small>Written by {article.author}</small>
          </Card.Header>
        ) : null}

        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            {article.description}</Card.Text>

          <Button
            variant="primary"
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            Go to article
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Article;
