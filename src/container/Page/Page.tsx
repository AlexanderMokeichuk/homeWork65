import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PageData} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../conponents/Spinner/Spinner";


const Page: React.FC = () => {
  const {id} = useParams();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [lauding, setLauding] = useState<boolean>(false);

  const fetchPageData = useCallback(async () => {
    try {
      setLauding(true);
      const {data: response} = await axiosApi.get<PageData | null>(`/${id}.json`);
      setPageData(response);
    } finally {
      setLauding(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchPageData();
  }, [fetchPageData]);

  let pageContent = (
    <>
      {pageData
        ? <div className={"alert alert-light  text-dark"}>{pageData.content}</div>
        : <h1>Not found</h1>
      }
    </>
  );
  if (lauding) pageContent = <Spinner/>;

  return (
    <div>
      {pageContent}
    </div>
  );
};

export default Page;