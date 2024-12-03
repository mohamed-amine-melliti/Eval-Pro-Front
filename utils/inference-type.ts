async function query(data) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
        {
          headers: {
            Authorization: "Bearer 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", // Replace with your actual Hugging Face API token
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error querying Hugging Face Inference API:", error);
      return null;
    }
  }
  
  // Example usage of the query function
  query({
    inputs: {
      source_sentence: "That is a happy person",
      sentences: [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day",
      ],
    },
  }).then((response) => {
    if (response) {
      console.log("Similarity Scores:", JSON.stringify(response, null, 2));
    } else {
      console.log("Failed to fetch similarity scores.");
    }
  });
  