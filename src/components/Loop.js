const Loop = function () {
  const loopArray = ["Piyanshee", "Vishwanath", "Tanisha", "Vedanshee"];
  const nameSaved = localStorage.getItem("name");
  return (
    <div>
      Loop
      <ul>
        {loopArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name ( store in localstorage )
            </label>
            <input
              type="text"
              defaultValue={nameSaved}
              onChange={(e) => {
                if (window && localStorage) {
                  localStorage.setItem("name", e.target.value);
                }
              }}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loop;
