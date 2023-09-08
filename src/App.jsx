import { Box, VStack } from '@chakra-ui/react'
import { HomePage, DetailsPage } from './pages'
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Routes>

        <Route exact path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailsPage />} />

      </Routes>
    </>
  )

}

export default App

