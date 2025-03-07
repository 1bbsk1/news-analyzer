import "./index.css";
import Flickity from "flickity";
import GithubApi from "../js/modules/GithubApi";
import CommitCard from "../js/components/CommitCard";
import CommitCardList from "../js/components/CommitCardList";
import {
  GITHUB_URL,
  GITHUB_OAUTH_TOKEN,
} from "../js/constants/github-api-variables";

interface CommitData {
  author: {
    avatar_url: string;
  } | null;
  commit: {
    author: {
      date: string;
      name: string;
      email: string;
    };
    message: string;
  };
  html_url: string;
}

const sliderContainer = document.querySelector(
  ".slider__container",
) as HTMLElement;

const githubApi = new GithubApi({
  url: GITHUB_URL,
  oAuthToken: GITHUB_OAUTH_TOKEN,
});

const flkty = new Flickity(sliderContainer, {
  groupCells: true,
  initialIndex: 3,
});

githubApi.getCommits().then((response: CommitData[]) => {
  const commitCardList = new CommitCardList(
    Object.values(response).map((commitData) => {
      const avatarLink =
        commitData.author === null
          ? "https://cms.qz.com/wp-content/uploads/2018/05/china-pandas-eyes-turned-white-in-sichuan-2018-e1525405988661.jpg?quality=75&strip=all&w=1600&h=900"
          : commitData.author.avatar_url;
      return new CommitCard({
        date: commitData.commit.author.date,
        author: commitData.commit.author.name,
        email: commitData.commit.author.email,
        avatar: avatarLink,
        text: commitData.commit.message,
        link: commitData.html_url,
      });
    }),
  );
  flkty.append(commitCardList.fetchCommits());
});
