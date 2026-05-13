import { useState } from "react";

export function useToggle() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow1 = () => {
    setIsFollowing(prev => !prev);
  };

  return {
    isFollowing,
    toggleFollow1,
  };
}
