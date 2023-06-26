import { useState } from 'react';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onDelete, onComplete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // console.log(updatedTitle);
    onUpdate(task.id, updatedTitle);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={handleChange}
          className={styles.editInput}
        />
      ) : (
        <p className={task.isCompleted ? styles.textCompleted : ""}>
          {task.title}
        </p>
      )}

      {isEditing ? (
        <button className={styles.updateButton} onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className={styles.editButton} onClick={handleEdit}>
          Edit
        </button>
      )}

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
