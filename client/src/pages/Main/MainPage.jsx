/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TagList from "./TagList";
import SelectedTagList from "./SelectedTagList";
import MainIntro from "./MainIntro";
import MovieSlider from "./MovieSlider";
import MovieListModal from "./MovieListModal";
import { getMovieListByTag, getInitialMovieList } from "../../modules/MainPage/tagDataSlice";

import { TagFilled } from "@ant-design/icons";

const selectedInfo = css`
    font-size: 1.25rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin: 35px 0 15px 0;
`;

const mainWrapperStyle = css`
    height: 91vh;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
`;

function MainPage() {
    const dispatch = useDispatch();
    const [initialCall, setInitialCall] = useState(false);
    const { selectedTagList, movieList } = useSelector((state) => state.mainTagDataSlice);

    useEffect(() => {
        dispatch(getInitialMovieList());
        setInitialCall(true);
    }, []);

    useEffect(() => {
        if (initialCall) {
            const debounce = setTimeout(() => {
                return dispatch(getMovieListByTag());
            }, 1000);
            return () => {
                clearTimeout(debounce);
            };
        }
    }, [selectedTagList]);

    return (
        <div>
            <main css={mainWrapperStyle}>
                <div>
                    <div>
                        <MainIntro />
                    </div>
                    <div>
                        <MovieListModal />
                        <MovieSlider />
                        <p css={selectedInfo}>
                            <TagFilled style={{ color: "#fff", marginRight: "0.625rem" }} />
                            {selectedTagList.length < 2
                                ? "??????????????? 2??? ?????? ???????????????!"
                                : `?????? ???????????? ?????? ????????? ????????? ${movieList.length}??? ?????????.`}
                        </p>
                        <SelectedTagList />
                        <TagList />
                    </div>
                </div>
            </main>
        </div>
    );
}
export default MainPage;
