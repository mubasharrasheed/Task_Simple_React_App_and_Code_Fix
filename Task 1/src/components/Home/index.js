import React, { useEffect, useState } from "react";
import Header from "../Header/Index";
import {
  CAvatar,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormSelect,
} from "@coreui/react";
function Index({
  notes,
  search,
  setSearch,
  isEdit,
  setIsEdit,
  note,
  setNote,
  handleUpdate,
  handleDelete,
  visible,
  setVisible,
  handleNoteSubmit,
  title,
  setTitle,
  body,
  setBody,
  handleUpdateNote,
}) {
  console.log(title, body);

  return (
    <>
      <Header />
      <div className="notes">
        <div className="container">
          <div className="title">
            <h4>User Managements</h4>
          </div>
          <div className="user_management">
            <div className="card">
              <div className="drop_search">
                <CFormSelect className="me-2">
                  <option value="title">Title</option>
                  <option value="body">Body</option>
                </CFormSelect>
                <div className="input-group me-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <img src="/images/search.svg" alt="Search" />
                  </button>
                </div>
                <CButton color="primary" onClick={() => setVisible(true)}>
                  <img src="/images/plus.svg" alt="plus" /> Add New Note
                </CButton>
              </div>
              <CTable bordered align="middle" className="mb-0" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Title</CTableHeaderCell>
                    <CTableHeaderCell>Body</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {notes?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={item?.id}>
                      <CTableDataCell>
                        <p>{item.title}</p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <p>{item.body}</p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleUpdate(true, { ...item, index })}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>
          </div>
        </div>
      </div>
      <CModal
        size="lg"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader className="border-0">
          <h3 className="modal-title">
            {isEdit ? "Update  Note" : "Add Note"}
          </h3>
        </CModalHeader>
        <CModalBody>
          <form>
            <div className="row">
              <div className="col-md-12">
                <label className="mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label className="mb-2">Body</label>
                <input
                  type="text"
                  placeholder="note"
                  className="form-control mb-3"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
            <CModalFooter className="border-0">
              <CButton
                color="primary"
                onClick={() => {
                  isEdit
                    ? handleUpdateNote(title, body)
                    : handleNoteSubmit(title, body);
                }}
              >
                Create
              </CButton>
            </CModalFooter>
          </form>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Index;
