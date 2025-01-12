import "./BasicTable.scss";

const BasicTable = () => {
  return (
    <div className="basic-table">
      <table>
        <thead>
          <tr>
            <th>Roles</th>
            <th>More Roles</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Admin</td>
            <td>Manager</td>
            <td>Delete radact</td>
          </tr>
          <tr>
            <td>Editor</td>
            <td>Supervisor</td>
            <td>Delete radact</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
