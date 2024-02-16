import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PageData} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../conponents/Spinner/Spinner";

const defaultState: PageData = {
  id: "",
  title: "",
  content: "",
};

const Page: React.FC = () => {
  const {id} = useParams();
  const [pageData, setPageData] = useState<PageData>(defaultState);
  const [lauding, setLauding] = useState<boolean>(false);

  const fetchPageData = useCallback(async () => {
    try {
      setLauding(true);
      const {data: response} = await axiosApi.get<PageData | null>(`/${id}.json`);
      if (response) {
        setPageData(response);
      } else {
        setPageData(defaultState);
      }
    } finally {
      setLauding(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchPageData();
  }, [fetchPageData]);

  let pageContent = (
    <>
      <div className={"alert alert-light  text-dark"}>{pageData.content}</div>)
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