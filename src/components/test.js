<div>
  <Modal
    visible={searchEmployeeVisible}
    onOk={handleOk}
    width="60%"
    style={{ top: 50 }}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Schließen
      </Button>,
    ]}
  >
    <label className="field a-field a-field_a1">
      <input
        onChange={getInput}
        className="field__input a-field__input"
        placeholder="z.B. Christian Willmes..."
        required
      ></input>
      <span className="a-field__label-wrap">
        <span className="a-field__label">Suche nach MitarbeiterIn...</span>
      </span>
    </label>

    <ul id={searchInput ? "employee-container" : "hide"}>
      {Object.entries(employeesWithoutMinusItemsDefaultRemoved).map(
        (item, index) => {
          return (
            <div onClick={getFeatureProperties} key={index}>
              <div className="employees">
                <div className="employee-image-container">
                  <LazyLoad key={index} overflow throttle={100} height={200}>
                    <img className="employees-image" src={item[1].img} />
                  </LazyLoad>
                </div>

                <p className="employees-title">{item[1].title} </p>
                <p className="employees-name">{item[1].name}</p>
              </div>
            </div>
          );
        }
      )}
    </ul>
  </Modal>

  <Modal
    visible={employeeVisible}
    width="600px"
    style={{ top: 100 }}
    onCancel={handleEmployeeCancel}
    footer={[
      <Button key="back" onClick={handleEmployeeCancel}>
        Schließen
      </Button>,
    ]}
  >
    <div id="employee-text-container">
      <div id="employee-image-container">
        <img
          src={clickedFeatureProperties.img}
          id="rauminformationen-image"
        ></img>
      </div>

      <div id="rauminformationen-container">
        <div id="employee">
          <div id="rauminformationen-data">
            <div className="text-bold">
              <h5 className="text-bold">{`${clickedFeatureProperties.title} ${clickedFeatureProperties.name}`}</h5>
              <p>{clickedFeatureProperties.street}</p>
              {clickedFeatureProperties.build_name}
              <p id="inline">, Raum </p>
              {clickedFeatureProperties.room_num}
            </div>
          </div>

          <div className="rauminformationen-grid">
            <p className="rauminformationen-type">Email:</p>
            <p className="rauminformationen-text">
              {clickedFeatureProperties.email}
            </p>
          </div>

          <div className="rauminformationen-grid">
            <p className="rauminformationen-type">Telefonnummer:</p>
            <p className="rauminformationen-text">
              {clickedFeatureProperties.tel_num}
            </p>
          </div>

          <div className="rauminformationen-grid">
            <p className="rauminformationen-type">Fax:</p>
            <p className="rauminformationen-text">
              {clickedFeatureProperties.fax_num}
            </p>
          </div>

          <a
            href={clickedFeatureProperties.homepage}
            target="_blank"
            className="rauminformationen-text"
            id="webseite-link"
          >
            Weiter zur Webseite
          </a>
        </div>
      </div>
    </div>
  </Modal>
</div>;
