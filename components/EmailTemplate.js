import React from 'react';

export default function EmailTemplate({ name, email, message }) {
  return (
    <div>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Message:</strong> {message}
        </li>
      </ul>
    </div>
  );
}