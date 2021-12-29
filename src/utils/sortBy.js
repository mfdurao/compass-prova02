const sortBy = (filter, post) =>{
  const posts = post;
  if (filter === "mostVoted") {
    const sorted = posts.sort(function (a, b) {
      if (a.voteScore > b.voteScore) return -1;
      if (a.voteScore < b.voteScore) return 1;
      return 0;
    });
    return sorted;
  }else if (filter === "leastVoted") {
    const sorted = posts.sort(function (a, b) {
      if (a.voteScore < b.voteScore) return -1;
      if (a.voteScore > b.voteScore) return 1;
      return 0;
    });
    return sorted;
  }
   else if (filter === "timestamp") {
    const sorted = posts.sort(function (a, b) {
      if (a.timestamp > b.timestamp) return -1;
      if (a.timestamp < b.timestamp) return 1;
      return 0;
    });
    return sorted;
  } else return(posts);
};

export default sortBy;
