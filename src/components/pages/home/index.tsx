export interface HomeComponentProps {}

export function HomeComponent(props: HomeComponentProps) {
  return (
    <section className="homePage h-100">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-between">
          <div className="col-xxl-4">
            <div className="row text-white">
              <h2 className="text-uppercase title">book your flight today</h2>
              <p className="fs-5">
                Find and book promotional flight tickets & cheap tickets in 3
                easy steps!
              </p>
              <p className="fs-5">
                Discover now the best deals htmlFor you at Traveloka!
              </p>
            </div>
          </div>
          <div className="col-xxl-7">
            <form action="" className="shadow p-3 mb-5 bg-body rounded">
              <div className="row mb-4">
                <div className="col-12 d-flex">
                  <div className="form-check w-auto me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      readOnly
                      name="typeFlight"
                      defaultChecked
                    />
                    <label className="form-check-label"> One way </label>
                  </div>
                  <div className="form-check w-auto">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="typeFlight"
                    />
                    <label className="form-check-label"> Two ways </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-floating mb-3">
                    <select
                      className="form-control"
                      id="floatingInput"
                      defaultValue="1">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label htmlFor="floatingInput text-uppercase">
                      FLYING FROM
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <select
                      className="form-control"
                      id="floatingInput"
                      defaultValue="1">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label htmlFor="floatingInput text-uppercase">
                      FLYING TO
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput text-uppercase">
                      DEPARTING
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput text-uppercase">
                      RETURNING
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value="0"
                    />
                    <label htmlFor="floatingInput text-uppercase">
                      ADULTS(18+)
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value="0"
                    />
                    <label htmlFor="floatingInput text-uppercase">
                      CHILDREN(2-11)
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value="0"
                    />
                    <label htmlFor="floatingInput text-uppercase">
                      BABY(0-2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <select
                      className="form-control"
                      id="floatingInput"
                      defaultValue="1">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label htmlFor="floatingInput text-uppercase">
                      FLYING FROM
                    </label>
                  </div>
                </div>
                <div className="col">
                  <button className="btn w-100 h-100 fs-5 text-white fw-normal">
                    SHOW FLIGHTS
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
