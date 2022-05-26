import { React, useState } from "react";
import styles from "../styles/Home.module.css";
    
function TodoItem() {
  const [isChecked, setIsChecked] = useState(false);
      
  const handleDelete = () => { };
     
  const handlecheck = async () => { };
    
  return (
        <div>
          <span className={styles.eachtodo}>
            <p className={styles.text}>Eat Breakfast</p>
            <div>
              <input
                type="checkbox"
                className={styles.toggle}
                defaultChecked= {false}
                onChange={handlecheck}
                onClick={() => setIsChecked(!isChecked)}
              />
              <button onClick={handleDelete}>Delete</button>
            </div>
          </span>
        </div>
   );
 }
export default TodoItem;