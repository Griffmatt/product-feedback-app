import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import AddComment from "./AddComment";

import Card from "../../components/SuggestionsCard";
import FeedbackComments from "./FeedbackComments";
import BackButton from "../../components/ui/BackButton";

import { selectSuggestions } from "../../redux/suggestionsSlice";
import { useSelector } from "react-redux";

import { suggestions } from "../../utilities/interfaces";

import { selectUser} from "../../redux/userSlice"


function FeedbackDetails({ id }: { id: string | undefined }) {
  const suggestion = useSelector(selectSuggestions);
  const user = useSelector(selectUser)

  const [currentSuggestion, setCurrentSuggestion] = useState<suggestions>();

  useEffect(() => {
    setCurrentSuggestion(suggestion.filter((s: suggestions) => s.id == id)[0]);
  }, [suggestion]);

  return (
    <>
      {currentSuggestion && 
        <div className="container container--padding-top">
          <div className="feedback">
            <div className="feedback__nav">
              <BackButton />
              {user?.admin && <Link to={`/edit-feedback/${currentSuggestion.id}`}>
                <button className="p-2 button button--blue button--md">
                  Edit Feedback
                </button>
              </Link>}
            </div>
            <Card suggestion={currentSuggestion} />
            <FeedbackComments suggestion={currentSuggestion}/>
            {user && <AddComment suggestion={currentSuggestion} />}
          </div>
        </div>}
    </>
  ) 
}

export default FeedbackDetails;
