import { useNavigate } from "react-router-dom";
import SearchPage from "./domains/searchPage";
import DomainsList from "./domains/domainList";

export default function MainPage() {
  return (
    <div>
      <SearchPage />
      <DomainsList />
    </div>
  );
}
