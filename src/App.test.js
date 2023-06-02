import { render, screen, fireEvent } from "@testing-library/react";
import { fetchArticles } from "./api/api";
import App from "./App";
import { MOCK } from "./mocks/mocks";
import { act } from "react-dom/test-utils";

jest.mock("./api/api", () => {
  return {
    fetchArticles: () => {
      console.log("hi");
      return Promise.resolve(MOCK.items[0].articles);
    },
  };
});

describe("App", () => {
  beforeEach(() => {
    act(() => {
      render(<App />);
    });
  });

  it("should render date and result count filters", () => {
    const dateField = screen.getByTestId("date-field");
    const resultCountField = screen.getByTestId("select-field");

    expect(dateField).toBeInTheDocument();
    expect(resultCountField).toBeInTheDocument();
  });

  it("should render 100 articles", async () => {
    const dateField = screen.getByTestId("date-field");
    await act(async () => {
      await fireEvent.change(dateField, { target: { value: "2015-10-10" } });
    });

    const articles = await screen.getAllByTestId("article-list-item");
    expect(articles.length).toBe(100);
  });

  it("should pin articles", async () => {
    const dateField = screen.getByTestId("date-field");
    await act(async () => {
      await fireEvent.change(dateField, { target: { value: "2015-10-10" } });
    });

    let noPinnedArticles = screen.queryByText("No pinned articles");
    expect(noPinnedArticles).toBeInTheDocument();

    const pins = await screen.getAllByTestId("pin-icon");
    await act(async () => {
      await fireEvent.click(pins[0]);
    });

    expect(screen.queryByText("No pinned articles")).not.toBeInTheDocument();
  });
});
