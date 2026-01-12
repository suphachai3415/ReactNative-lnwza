import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* =======================
     Section 2
  ======================= */
  section2Card: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -30,
    padding: 15,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  section2Title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  section2RatingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  section2StarItem: {
    marginHorizontal: 2,
  },

  section2StarFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  section2Description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },

  /* =======================
     Section 7
  ======================= */
  section7Container: {
    margin: 20,
  },

  section7Title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  section7Card: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },

  section7Image: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },

  section7Content: {
    marginLeft: 10,
    flex: 1,
  },

  section7RoomName: {
    fontWeight: 'bold',
  },

  section7Price: {
    marginTop: 5,
    fontSize: 16,
  },

  section7Warning: {
    marginTop: 5,
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
