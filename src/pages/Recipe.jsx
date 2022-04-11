import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`
      );

      const data = await api.json();
      setDetails(data);
    };

    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="left-container">
        <h2>
          {
            // @ts-ignore
            details.title
          }
        </h2>
        <img
          src={
            // @ts-ignore
            details.image
          }
          alt=""
        />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{
                __html:
                  // @ts-ignore
                  details.summary,
              }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{
                __html:
                  // @ts-ignore
                  details.instructions,
              }}
            ></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details// @ts-ignore
            .extendedIngredients
              .map((ingredient) => (
                <li key={ingredient.id}> {ingredient.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    position: relative;
    margin-bottom: 2rem;
    line-height: 2.5rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  // div.left-container{
  //   position: relative;
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   width: 50%;
  //   margin: 0 auto;
  // }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  // margin-right: 2rem;
  margin: 0 2rem 1rem;
  font-weight: 600;
  text-align: center;
`;

const Info = styled.div`
  margin-left: 1rem;
`;
