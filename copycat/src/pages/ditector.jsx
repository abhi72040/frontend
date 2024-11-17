import React, { useState } from 'react';
import '../css/ditector.css';
import { Link } from 'react-router-dom';
import Plagiarism from '../pages/plagiarism.jsx';


const PlagiarismChecker = () => {
  const [repoUrls, setRepoUrls] = useState(["", ""]); // Holds URLs of the repositories
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  // Handle URL change
  const handleRepoChange = (index, value) => {
    const updatedUrls = [...repoUrls];
    updatedUrls[index] = value;
    setRepoUrls(updatedUrls);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!repoUrls[0] || !repoUrls[1]) {
      setError("Please enter URLs for both repositories.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      // Placeholder for API call to check plagiarism between repos
      const response = await fetch('/api/plagiarism-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repos: repoUrls }),
      });

      const data = await response.json();
      setResults(data); // Store results in state
    } catch (err) {
      setError("An error occurred while checking the repositories.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plagiarism-checker">
      <h1>Plagiarism Checker for GitHub Repositories</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Repository 1 URL:</label>
          <input
            type="url"
            value={repoUrls[0]}
            onChange={(e) => handleRepoChange(0, e.target.value)}
            placeholder="Enter test Repository URL"
          />
        </div>

        <div className="input-container">
          <label>Repository 2 URL:</label>
          <input
            type="url"
            value={repoUrls[1]}
            onChange={(e) => handleRepoChange(1, e.target.value)}
            placeholder="Enter reference Repository URL"
          />
        </div>
        <div className="input-container">
          <label>Type of project</label>
          <input
            type="url"
            value={repoUrls[1]}
            onChange={(e) => handleRepoChange(1, e.target.value)}
            placeholder="keywords e.g.title of project"
          />
        </div>

        <button type="submit" disabled={loading}>Check Plagiarism</button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading && <p>Loading...</p>}

      {results && (
        <div className="results">
          <h2>Plagiarism Check Results</h2>
          {/* Display results here */}
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
        
      )}
      <div>
        <Link to={"/Plagiarism"}>
      <h4>Custom Tester</h4>
      </Link>
      </div>
    </div>
  );
};

export default PlagiarismChecker;
