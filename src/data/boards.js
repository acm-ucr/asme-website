import boardPlaceholder from "../../public/boards/board.png";
import DangTieu from "../../public/boards/DangTieu.webp";
import TimothyLe from "../../public/boards/TimothyLe.webp";
import LesleyGalvan from "../../public/boards/LesleyGalvan.webp";
import EvanPercival from "../../public/boards/EvanPercival.webp";
import James from "../../public/boards/James.webp";

export const boards = [
  {
    name: "Dang Tieu",
    position: "President",
    image: DangTieu,
  },
  {
    name: "Timothy Le",
    position: "Vice President",
    image: TimothyLe,
  },
  {
    name: "Vacant",
    position: "Secretary",
    image: boardPlaceholder,
  },
  {
    name: "James Tam",
    position: "Treasurer",
    image: James,
  },
  {
    name: "Lesley Galvan",
    position: "Social Chair",
    image: LesleyGalvan,
  },
  {
    name: "Evan Percival",
    position: "HCR President",
    image: EvanPercival,
  },
];
