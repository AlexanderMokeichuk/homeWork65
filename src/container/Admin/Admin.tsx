import React, {useCallback, useEffect, useState} from "react";
import Spinner from "../../conponents/Spinner/Spinner";
import {PageData} from "../../type";
import axiosApi from "../../axiosApi";
import Form from "../../conponents/Form/Form";
import {PAGES} from "../../constants";

const defaultState: PageData = {
  id: "",
  title: "",
  content: "",
};
const Admin: React.FC = () => {
  const [lauding, setLauding] = useState<boolean>(false);
  const [pageName, setPageName] = useState<string>("");
  const [page, setPage] = useState<PageData>(defaultState);

  const changePageName = (e: React.ChangeEvent<HTMLSelectElement>) => setPageName(e.target.value);

  const fetchDataApiPages = useCallback(async () => {
    try {
      setLauding(true);
      const {data: response} = await axiosApi.get<PageData | null>(`/${pageName}.json`);
      if(response) {
        setPage(response);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLauding(false);
    }
  }, [pageName]);

  useEffect(() => {
    if(pageName !== "") {
      void fetchDataApiPages();
    }
  }, [fetchDataApiPages, pageName]);

  let admin = (
    <>
      <select
        className="form-select mb-5"
        aria-label="Default select example"

        value={pageName}
        onChange={changePageName}
      >
        <option defaultValue={"home"}>Select page to edit</option>
        {PAGES.map((page, index) => {
          return (
            <option
              key={`${page.id}${index}`}
              value={page.id}
            >
              {page.name}
            </option>
          );
        })}
      </select>
      {
        (pageName !== "")
        ? <Form page={page}/>
        : <h3 className={"text-white"}>Select a page</h3>
      }
    </>
  );

  if (lauding) admin = <Spinner/>;

  return admin;
};

export default Admin;