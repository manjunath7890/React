import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
  },
  section: {
    margin: '0px 20px 20px 0px',
    padding: '40px 10px 10px 10px',
    flexGrow: 1,
    border:'1px solid black',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '31%', // Adjust the width as needed
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    border: '1px solid #bbb', // Border
    fontSize:'15px'
  },
});

const PDFDocument = ({ userData }) => {
  // Sample data for the continuous line chart
  const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
  const maxValue = Math.max(...data);

  // Calculate chart dimensions and points
  const chartWidth = 300;
  const chartHeight = 150;
  const pointInterval = chartWidth / (data.length - 1);

  return (
    <PDFViewer width={424} height={630}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.row}>
              <View style={styles.item}>
                <Text>Date: {userData.Date}</Text>
              </View>
              <View style={styles.item}>
                <Text>Start time: {userData.v2}</Text>
              </View>
              <View style={styles.item}>
                <Text>End time: {userData.v3}</Text>
              </View>
              <View style={styles.item}>
                <Text>Max current: {userData.v4}</Text>
              </View>
              <View style={styles.item}>
                <Text>End Voltage: {userData.v5}</Text>
              </View>
              <View style={styles.item}>
                <Text>Whr consumed: {userData.v6}</Text>
              </View>
              <View style={styles.item}>
                <Text>Initial SOC: {userData.v7}</Text>
              </View>
              <View style={styles.item}>
                <Text>Final SOC: {userData.v8}</Text>
              </View>
              <View style={styles.item}>
                <Text>Average Whr/km: {userData.v9}</Text>
              </View>
              <View style={styles.item}>
                <Text>Top speed: {userData.v10}</Text>
              </View>
              <View style={styles.item}>
                <Text>Average Speed: {userData.v11}</Text>
              </View>
              <View style={styles.item}>
                <Text>Distance Covered: {userData.v12}</Text>
              </View>
              <View style={styles.item}>
                <Text>Initial Controller Temperature: {userData.v13}</Text>
              </View>
              <View style={styles.item}>
                <Text>Initial Motor Temperature: {userData.v14}</Text>
              </View>
              <View style={styles.item}>
                <Text>Final Controller Temperature: {userData.v15}</Text>
              </View>
              <View style={styles.item}>
                <Text>Final Motor Temperature: {userData.v16}</Text>
              </View>
              <View style={styles.item}>
                <Text>Vehicle load: {userData.v17}</Text>
              </View>
              <View style={styles.item}>
                <Text>Driving mode: {userData.v18}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFDocument;
