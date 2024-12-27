'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlotProps
} from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
  }
}

interface TableComponentsProps {
  rows: GridRowsProp,
  setRows: Dispatch<SetStateAction<GridRowsProp>>,
  extraColumns: GridColDef
}

export default function TableComponents( {rows, setRows, extraColumns}: TableComponentsProps ) {

  function EditToolbar(props: GridSlotProps['toolbar']) {
    const { setRows, setRowModesModel } = props;
    const [id, setId] = useState(rows.length ? rows[rows.length - 1].id : 0);

    const generateId = () => {
      const newId =  id + 1;
      setId(newId)
      return newId;
    }
  
    const handleClick = () => {
      const id = generateId();
      setRows((oldRows) => {
        if (oldRows)
          return [
            ...oldRows,
            { id, isNew: true },
          ];
        return [{ id, isNew: true }]
      })
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit },
      }));
    };
  
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Adicionar {extraColumns.headerName}
        </Button>
      </GridToolbarContainer>
    );
  }
  
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows?.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows?.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows?.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows?.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    extraColumns,
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={"cellitem"}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={"cellitem2"}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={3}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={4  }
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        p: 2, border: '1px solid grey' 
      }}
    >
        <Typography variant="subtitle2" gutterBottom>
          {extraColumns.headerName}
        </Typography>
      <Box sx={{
        height: 480, }}>

        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: EditToolbar }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
}