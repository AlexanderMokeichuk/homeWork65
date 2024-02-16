import React, {useState} from "react";
import {PageData} from "../../type";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  page: PageData,
}
const Form: React.FC<Props> = ({page}) => {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState<PageData>(page);

  const changePageData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPageData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.put(`/${pageData.id}.json`, {...pageData});
    navigate(`/pages/${pageData.id}`);
  };

  return (
    <form onSubmit={onSubmit} className={"form-control d-flex flex-column"}>
      <div>
        <label htmlFor={"title"}>Title</label>
        <input
          type={"text"}
          name={"title"}
          className={"form-control"}
          value={pageData.title}
          onChange={changePageData}
        />
      </div>
      <div>
        <label htmlFor={"content"}>Content</label>
        <textarea
          name={"content"}
          className={"form-control"}
          value={pageData.content}
          onChange={changePageData}
        >
      </textarea>
      </div>
      <button type={"submit"} className={"btn btn-primary mt-3 ms-auto"}>Edit</button>
    </form>
  );
};

export default Form;